import * as React from 'react';
import { Url } from '../../types';
const apiHost = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export interface Props {
  record: Url;
}

export interface State {}

export function UrlRow(props: Props) {
  return (
    <tr>
      <td>{props.record.url}</td>
      <td><a href={`${apiHost}/t/`+props.record.id}>{apiHost}/t/{props.record.id}</a></td>
      <td>{props.record.hits}</td>
    </tr>
  );
}

export default UrlRow;
