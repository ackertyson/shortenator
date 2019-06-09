import * as React from 'react';
import { connect } from 'react-redux'
import UrlForm from './UrlForm';
import UrlList from './UrlList';
import * as actions from './actions';
import { Url } from '../../types';

export interface Props {
  fetchUrls: Function;
  records: Url[];
}

export class UrlContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchUrls();
  }

  render() {
    return (
      <section>
        <h1>URLs</h1>
        <UrlForm/>
        <UrlList records={this.props.records}/>
      </section>
    );
  }
}

const mapStateToProps = (state: any) => ({
  records: state.url.records
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchUrls: () => dispatch(actions.fetchUrls())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UrlContainer);
