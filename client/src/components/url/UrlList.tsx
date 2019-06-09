import * as React from 'react';
import UrlRow from './UrlRow';
import { Url } from '../../types';

export interface Props {
  records: Url[]
}

export function UrlList(props: Props) {
  const records = props.records.map(record => <UrlRow key={record.id} record={record}/>);
  return (
    <table>
      <thead>
        <tr>
          <th>Original URL</th>
          <th>Tiny URL</th>
          <th>Hit Count</th>
        </tr>
      </thead>
      <tbody>
        {records}
      </tbody>
    </table>
  );
}

export default UrlList;
