import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';
import { connect } from 'ember-redux';

const stateToComputed = state => {
  return {
    number: state.number
  };
};

const dispatchToActions = dispatch => {
  return {
    add: () => dispatch({type: 'ADD'})
  };
};

export default connect(stateToComputed, dispatchToActions)();
