import { Button } from '@/component';

function Buttons() {
	return (
		<>
			<div className='flex place-content-center '>
				<h1 className='text-3xl font-bold underline'>Buttons!</h1>
			</div>
			<div className='mt-4 flex flex-col items-center gap-4'>
				<div className='flex gap-2 '>
					<span>Regular</span>
					<span>Small</span>
				</div>
				<div className='flex gap-2'>
					<Button
						s='regular'
						v='primary'
						src={['/vite.svg', '/react.svg']}
					>
						Label2
					</Button>
					<Button
						s='small'
						v='primary'
						src={['/react.svg', '/vite.svg']}
					>
						Label1
					</Button>
				</div>
				<div className='flex gap-2'>
					<Button
						s='regular'
						v='secondary'
						// src={ReactLogo}
					>
						Label
					</Button>
					<Button s='small' v='secondary'>
						Label
					</Button>
				</div>
				<div className='flex gap-2'>
					<Button s='regular' v='subtle'>
						Label
					</Button>
					<Button s='small' v='subtle'>
						Label
					</Button>
				</div>
				<div className='flex gap-2'>
					<Button s='regular' v='ghost'>
						Label
					</Button>
					<Button s='small' v='ghost'>
						Label
					</Button>
				</div>
				<div className='flex gap-2'>
					<Button s='regular' v='primary' disabled>
						Label
					</Button>
					<Button
						s='small'
						v='primary'
						disabled
						src={['/vite.svg', '/react.svg', '/react.svg']}
					>
						Label
					</Button>
				</div>
				<div className='flex gap-2'>
					<Button width={180}>Custom Width</Button>
					<Button width={180}>Custom Width</Button>
				</div>
			</div>
		</>
	);
}

export default Buttons;
