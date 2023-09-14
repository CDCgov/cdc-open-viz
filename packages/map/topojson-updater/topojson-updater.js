import * as shapefile from 'shapefile';
import * as topojson from 'topojson-server';
import * as topoclient from 'topojson-client';
import * as toposimplify from 'topojson-simplify';
import * as path from 'path';
import * as fs from 'fs';
import { readdir } from 'fs/promises';

// Constants
const shapefileFolderPath = './shapefiles/';
const outputFolderPath = '../src/data/'
const includeProperties = {'NAME': 'name'};
const id = 'GEOID';
const simplifyFactor = .0000001;
const quantizeFactor = 100000;

// Gets directories of county shapefiles
const directories = (await readdir(shapefileFolderPath, { withFileTypes: true }))
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(dirent => dirent.indexOf('county') !== -1);

const processShapefile = (i) => {
  const countyDirectory = directories[i];
  const stateDirectory = directories[i].replace('county', 'state');
  const countyFiles = fs.readdirSync(`${shapefileFolderPath}${countyDirectory}`).filter(file => path.extname(file) === ".shp");
  const stateFiles = fs.readdirSync(`${shapefileFolderPath}${stateDirectory}`).filter(file => path.extname(file) === ".shp");

  if(countyFiles.length > 0){
    shapefile.read(`${shapefileFolderPath}${countyDirectory}/${countyFiles[0]}`)
      .then(function log(counties) {
        if(stateFiles.length > 0){
          shapefile.read(`${shapefileFolderPath}${stateDirectory}/${stateFiles[0]}`)
            .then(function log(states) {
              const outputFile = countyFiles[0].substring(0, countyFiles[0].length - 4) + '.json';

              const filterProps = geometry => {
                Object.keys(geometry.properties).forEach(property => {
                  if(property === id){
                    geometry.id = geometry.properties[property];
                  }
                  if(includeProperties[property]){
                    geometry.properties[includeProperties[property]] = geometry.properties[property];
                  }
                  if(includeProperties[property] !== property){
                    delete geometry.properties[property];
                  }
                })
              };

              let topoOutput = topojson.topology({counties, states});

              topoOutput = toposimplify.presimplify(topoOutput, toposimplify['planarTriangleArea']);
              topoOutput = toposimplify.simplify(topoOutput, simplifyFactor);
              topoOutput = topoclient.quantize(topoOutput, quantizeFactor);
              
              topoOutput.objects.counties.geometries.forEach(filterProps);
              topoOutput.objects.states.geometries.forEach(filterProps);

              fs.open(`${outputFolderPath}/${outputFile}`, 'wx', (err, fd) => {
                if(err) {
                  console.log(`Unable to create file ${outputFolderPath}${outputFile}\n${err}`);
                } 

                fs.writeFile(`${outputFolderPath}${outputFile}`, JSON.stringify(topoOutput), err => {
                  if (err) {
                    console.error(err);
                  }
                  if(i < directories.length - 1){
                    processShapefile(i + 1);
                  }
                });
              });

            })
            .catch(error => console.error(error.stack));
        } else {
          console.log('No state shape files found');
        }
      })
      .catch(error => console.error(error.stack));
    } else {
      console.log('No county shape files found');
    }
}

processShapefile(0);

