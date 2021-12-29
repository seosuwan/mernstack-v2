import React from 'react'
import styled from 'styled-components'

const LogChart = () => {
    return(<>
    <LogTable>
        <tr>
            <th>id</th>
            <td>date</td>
            <td>category</td>
            <td>content</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>01</th>
            <td>2021-08-30 10:00:00</td>
            <td>GPS</td>
            <td>샘플 로그</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>02</th>
            <td>2021-08-30 10:00:00</td>
            <td>GPS</td>
            <td>샘플 로그</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>03</th>
            <td>2021-08-30 10:00:00</td>
            <td>Message</td>
            <td>샘플 로그</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>04</th>
            <td>2021-08-30 10:00:00</td>
            <td>Device</td>
            <td>샘플 로그</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>05</th>
            <td>2021-08-30 10:00:00</td>
            <td>Device</td>
            <td>샘플 로그</td>
            <td></td>
            <td></td>
        </tr>
    </LogTable>
    </>)
}
export default LogChart

const LogTable = styled.table`
    width:100%;
    text-align:center;
    padding:20px;
`