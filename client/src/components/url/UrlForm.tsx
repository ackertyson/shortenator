import * as React from 'react';
import { connect } from 'react-redux'
import * as actions from './actions';
import { FormContainer, InputEvent } from '../../types';

export interface Props {
  addUrl: Function,
  errorMessage: string
}

export interface State {
  url: string
}

export class UrlForm extends React.Component<Props, State> implements FormContainer {
  constructor(props: Props) {
    super(props);

    this.state = { url: '' };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(): void {
    this.props.addUrl(this.state.url);
  }

  handleInputChange(event: InputEvent): void {
    const { name, value } = event.target;
    this.setState({ [name]: value } as unknown as Pick<State, keyof State>);
  }

  render() {
    return (
      <section>
        <input
          type="text"
          name="url"
          onChange={this.handleInputChange}/>
        <button type="button" onClick={this.handleFormSubmit}>
          Create URL
        </button>
        <div className="error">{this.props.errorMessage}</div>
      </section>
    );
  }
}

const mapStateToProps = (state: any) => ({
  errorMessage: state.url.errorMessage
});

const mapDispatchToProps = (dispatch: any) => ({
  addUrl: (url: string) => dispatch(actions.addUrl(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UrlForm);
