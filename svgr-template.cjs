// ${variables.imports};

const template = (variables, { tpl }) => {
	return tpl`
    import { forwardRef, memo } from 'react';
    import type { Ref, SVGProps } from 'react';
    ${variables.interfaces};

    const ${variables.componentName} = (${variables.props}) => (
        ${variables.jsx}
    );

    ${variables.exports};
  `;
};

module.exports = template;
