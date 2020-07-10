import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { ExpansionPanelActions } from '@material-ui/core';

describe('App', () => {
    let wrapper;

    beforeEach(() => wrapper = mount(<App />));

    
    it('data is stored in the Apps state, initially empty', () => {
        expect(wrapper.state('data')).toEqual({});
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('information about countries is stored in the Apps state, initially empty', () => {
        expect(wrapper.state('country')).toEqual('');
    });
});