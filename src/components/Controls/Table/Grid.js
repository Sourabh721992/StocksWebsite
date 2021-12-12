import React, { Component } from 'react'
import {Table} from 'react-bootstrap'

class Grid extends Component {
  constructor(props){
    super(props);
    this.state= {
      arrColumnNames: Object.keys(this.props.data[0])
    }
  }
  render() {
    return (
      <Table striped hover>
        <thead>
          <tr key={-1}>
            {
              this.state.arrColumnNames.map((columnName, index) => {
                return(
                  <th key={index}>
                      {String(columnName).toUpperCase()}
                  </th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            this.props.data.map((d,index) =>  {
              return(
                <tr key={index}>
                  {
                    this.state.arrColumnNames.map((columnName, index) => {
                      return(
                        <td key={index}>
                            {d[columnName]}
                        </td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    )
  }
}

export default Grid
