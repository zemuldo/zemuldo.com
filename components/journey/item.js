import React from 'react';
import PropTypes from 'prop-types';
import { Experience, Project } from './item_templates';

export default function Item(props) {

  switch (props.template) {
    case 'experience':
      return <Experience details= {{...props}} />;
    default:
      return <Project details= {{...props}} />;
  }
}
Item.propTypes = {
  template: PropTypes.string.isRequired
};

