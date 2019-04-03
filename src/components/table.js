import React from 'react';

import { Table} from 'antd';
import "antd/dist/antd.css";

class DataTable extends React.Component {
  state = {};
  render() {
    const {columns,data} = this.props;
    return (
      <div>
        <Table columns={columns} dataSource={data} onChange={this.handleChange} />
      </div>
    );
  }
}

export default DataTable;
