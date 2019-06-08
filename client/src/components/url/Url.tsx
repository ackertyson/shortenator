import * as React from 'react';
import { connect } from 'react-redux'
import UrlForm from './UrlForm';
import UrlList from './UrlList';
import * as actions from './actions';
import { Url } from '../../types';

export interface Props {
  fetchUrls: Function,
  records: Url[]
}

export interface State {}

export class UrlContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.onUpdate = this.onUpdate.bind(this);
  }

  componentDidMount() {
    this.props.fetchUrls();
  }

  onUpdate(url: Url): void {
    const records = this.props.records
      .map(record => {
        if (record.id === url.id) {
          record.hits += 1;
        }
        return record;
      });
  }

  render() {
    return (
      <section>
        <UrlForm/>
        <UrlList records={this.props.records || []}/>
      </section>
    );
  }
}

const mapStateToProps = (state: any) => ({
  records: state.url.records
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchUrls: () => dispatch(actions.fetchUrls())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UrlContainer);
