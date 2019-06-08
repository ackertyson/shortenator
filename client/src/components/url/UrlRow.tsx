import * as React from 'react';
import { Url } from '../../types';

export interface Props {
  record: Url
}

export interface State {}

export function UrlRow(props: Props) {
  return (
    <tr>
      <td>{props.record.url}</td>
      <td>http://localhost:5000/t/{props.record.id}</td>
      <td>{props.record.hits}</td>
    </tr>
  );
}

export default UrlRow;
