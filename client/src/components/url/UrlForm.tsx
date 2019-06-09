import * as React from 'react';
import { connect } from 'react-redux'
import * as actions from './actions';
import { FormContainer, InputEvent } from '../../types';

export interface Props {
  addUrl: Function;
  errorMessage: string;
  updateUrl: Function;
  url: string;
}

export class UrlForm extends React.Component<Props> implements FormContainer {
  constructor(props: Props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getInputClass() {
    return this.props.errorMessage ? 'error' : '';
  }

  handleFormSubmit(event: React.FormEvent): void {
    event.preventDefault();
    this.props.addUrl(this.props.url);
  }

  handleInputChange(event: InputEvent): void {
    const { name, value } = event.target;
    if (name === 'url') {
      this.props.updateUrl(value);
    }
  }

  render() {
    return (
      <section className="group">
        <form>
          <input
            className={this.getInputClass()}
            type="text"
            name="url"
            value={this.props.url}
            onChange={this.handleInputChange}/>
          {this.props.errorMessage && <p className="error">Error: {this.props.errorMessage}</p>}
          <button type="submit" onClick={this.handleFormSubmit}>
            Create URL
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state: any) => ({
  errorMessage: state.url.errorMessage,
  url: state.url.url
});

const mapDispatchToProps = (dispatch: Function) => ({
  addUrl: (url: string) => dispatch(actions.addUrl(url)),
  updateUrl: (url: string) => dispatch(actions.updateUrl(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UrlForm);
