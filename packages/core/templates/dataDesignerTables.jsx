import React from 'react'

export const DATA_TABLE_VERTICAL = (
  <>
    <table>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Value</th>
          <th>...</th>
        </tr>
        <tr>
          <td>01/01/2020</td>
          <td>150</td>
          <td>...</td>
        </tr>
        <tr>
          <td>02/01/2020</td>
          <td>150</td>
          <td>...</td>
        </tr>
      </tbody>
    </table>
    <table>
      <tbody>
        <tr>
          <th>State</th>
          <th>Value</th>
          <th>...</th>
        </tr>
        <tr>
          <td>Georgia</td>
          <td>150</td>
          <td>...</td>
        </tr>
        <tr>
          <td>Florida</td>
          <td>150</td>
          <td>...</td>
        </tr>
      </tbody>
    </table>
  </>
)

export const DATA_TABLE_HORIZONTAL = (
  <>
    <table>
      <tbody>
        <tr>
          <th>Date</th>
          <td>01/01/2020</td>
          <td>02/01/2020</td>
          <td>...</td>
        </tr>
        <tr>
          <th>Value</th>
          <td>100</td>
          <td>150</td>
          <td>...</td>
        </tr>
      </tbody>
    </table>
    <table>
      <tbody>
        <tr>
          <th>State</th>
          <td>Georgia</td>
          <td>Florida</td>
          <td>...</td>
        </tr>
        <tr>
          <th>Value</th>
          <td>100</td>
          <td>150</td>
          <td>...</td>
        </tr>
      </tbody>
    </table>
  </>
)

export const DATA_TABLE_SINGLE_ROW = (
  <table>
    <tbody>
      <tr>
        <th>Date</th>
        <th>Virus 1</th>
        <th>Virus 2</th>
        <th>...</th>
      </tr>
      <tr>
        <td>01/01/2020</td>
        <td>100</td>
        <td>150</td>
        <td>...</td>
      </tr>
      <tr>
        <td>02/01/2020</td>
        <td>15</td>
        <td>20</td>
        <td>...</td>
      </tr>
    </tbody>
  </table>
)

export const DATA_TABLE_MULTI_ROW = (
  <table>
    <tbody>
      <tr>
        <th>Virus</th>
        <th>Date</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>Virus 1</td>
        <td>01/01/2020</td>
        <td>100</td>
      </tr>
      <tr>
        <td>Virus 1</td>
        <td>02/01/2020</td>
        <td>150</td>
      </tr>
      <tr>
        <td>...</td>
        <td>...</td>
        <td>...</td>
      </tr>
      <tr>
        <td>Virus 2</td>
        <td>01/01/2020</td>
        <td>15</td>
      </tr>
      <tr>
        <td>Virus 2</td>
        <td>02/01/2020</td>
        <td>20</td>
      </tr>
      <tr>
        <td>...</td>
        <td>...</td>
        <td>...</td>
      </tr>
    </tbody>
  </table>
)
