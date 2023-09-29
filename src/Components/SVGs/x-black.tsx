import { forwardRef, memo } from 'react';
import type { Ref, SVGProps } from 'react';

interface SVGRProps {
	title?: string;
	titleId?: string;
	desc?: string;
	descId?: string;
}
const SvgXBlack = (
	{
		title,
		titleId,
		desc,
		descId,
		...props
	}: SVGProps<SVGSVGElement> & SVGRProps,
	ref: Ref<SVGSVGElement>,
) => (
	<svg
		width='10px'
		height='10px'
		viewBox='0 0 10 10'
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		ref={ref}
		aria-labelledby={titleId}
		aria-describedby={descId}
		{...props}
	>
		{title === undefined ? (
			<title id={titleId}>{'Group'}</title>
		) : title ? (
			<title id={titleId}>{title}</title>
		) : null}
		{desc === undefined ? (
			<desc id={descId}>{'Created with Sketch.'}</desc>
		) : desc ? (
			<desc id={descId}>{desc}</desc>
		) : null}
		<g strokeWidth={1} fillRule='evenodd'>
			<g
				transform='translate(-123.000000, -151.000000)'
				fillRule='nonzero'
			>
				<g transform='translate(124.000000, 152.000000)'>
					<path d='M7.8913916,-0.441941738 C8.13546928,-0.686019421 8.53119739,-0.686019421 8.77527507,-0.441941738 C8.99223301,-0.224983798 9.01633945,0.111796703 8.84759438,0.355381879 L8.77527507,0.441941738 L0.441941738,8.77527507 C0.197864056,9.01935275 -0.197864056,9.01935275 -0.441941738,8.77527507 C-0.658899678,8.55831713 -0.683006116,8.22153663 -0.514261052,7.97795145 L-0.441941738,7.8913916 L7.8913916,-0.441941738 Z' />
					<path d='M-0.441941738,-0.441941738 C-0.224983798,-0.658899678 0.111796703,-0.683006116 0.355381879,-0.514261052 L0.441941738,-0.441941738 L8.77527507,7.8913916 C9.01935275,8.13546928 9.01935275,8.53119739 8.77527507,8.77527507 C8.55831713,8.99223301 8.22153663,9.01633945 7.97795145,8.84759438 L7.8913916,8.77527507 L-0.441941738,0.441941738 C-0.686019421,0.197864056 -0.686019421,-0.197864056 -0.441941738,-0.441941738 Z' />
				</g>
			</g>
		</g>
	</svg>
);
const ForwardRef = forwardRef(SvgXBlack);
const Memo = memo(ForwardRef);
export default Memo;
