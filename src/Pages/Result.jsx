import React from 'react'
import { Table } from 'antd';

function SurveyResult({answers}) {
    const columns = [
        
        {
          title: '#',
          dataIndex: 'index',
            key: 'index'

        },
        {
          title: 'Question',
          dataIndex: 'currentQuestion',
        
        },
        {
            title: 'Answers',
            
            dataIndex:'Answer',
            render: text => <a className='table-answer-style' >{text}</a>,
          },
       
      ];
      const data = answers;
    return (
        <div>
            {/* hello world */}
             <Table columns={columns} dataSource={data} pagination={false}  />
        </div>
    )
}

export default SurveyResult
