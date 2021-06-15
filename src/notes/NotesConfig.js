import PropTypes from 'prop-types';

export default {
  sections: [{
    name: 'Abstract Algebra',
    subdirectory: 'abstract-algebra',
    sections: [
      {name: 'Group Homomorphisms', file: 'homomorphisms'},
      {name: 'Quotient Groups', file: 'quotient-groups'},
      {name: 'Group Actions', file: 'actions'},
      {name: 'Conjugation', file: 'conjugation'},
      {name: 'The Sylow Theorems', file: 'sylow'},
      {name: 'Rings', file: 'rings'},
      {name: 'Ring Homomorphisms and Ideals', file: 'ideals'},
      {name: 'Quotient Rings', file: 'quotient-rings'},
      {name: 'Fraction Fields', file: 'fractions'},
      {name: 'Factoring', file: 'factoring'},
      {name: 'Factorization of Integer Polynomials', file: 'integer-polynomials'},
      {name: 'Quadratic Number Fields', file: 'quadratic-number-fields'},
      {name: 'Fields', file: 'fields'},
    ],
  }, {
    name: 'Linear Algebra',
    subdirectory: 'linear-algebra',
    sections: [
      {name: 'Duality', file: 'duality'},
    ],
  }],
};

export const ConfigType = PropTypes.shape({
  subdirectory: PropTypes.string,
  sections: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    file: PropTypes.string,
  })),
});
