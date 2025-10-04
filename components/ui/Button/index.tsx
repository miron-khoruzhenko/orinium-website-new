import { cn } from '@/lib/utils';
import Link from 'next/link';
import { tv } from 'tailwind-variants';

const button = tv({
	base: 'px-8 py-3 font-medium transition-colors inline-block text-center border border-black min-h-[50px] flex items-center justify-center',
	variants: {
		color: {
			primary: 'bg-black text-white hover:bg-gray-900',
			secondary: 'border-black bg-white hover:bg-black hover:text-white'
		},
		size: {
			sm: 'text-sm',
			md: 'text-base',
		}
	},
	defaultVariants: {
		size: 'md',
		color: 'primary'
	}
});

interface ButtonProps {
	href: string;
	color?: 'primary' | 'secondary';
	size?: 'sm' | 'md';
}

const ButtonLink = (props: ButtonProps & StandartProps) => {
	return (
		<Link 
			href={props.href || "#"} 
			className={cn(button({ size: props.size, color: props.color }), props.className)} 
			style={props.style} 
			id={props.id}
		>
			{props.children}
		</Link>
	)
}

export default ButtonLink