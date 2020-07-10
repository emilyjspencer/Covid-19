import React from 'react';
import { shallow } from 'enzyme';
import CountrySelector from './CountrySelector';

describe('CountrySelector', () => {

    let wrapper;

    beforeEach(() => wrapper = shallow(<CountrySelector />));

    it('the dropdown is by default global', () => {
      expect(wrapper.find('#dropdown').text()).toEqual('Global Daily Data - click the dropdown to select a country');
    });
});