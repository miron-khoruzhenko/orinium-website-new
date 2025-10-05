export const Map = (props: StandartProps) => {
	return (
		<iframe
			className={props.className}
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.267436692222!2d29.06171227652257!3d40.99751932008648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7e8b8d0a0bf%3A0x9f452f654569ea3a!2sUskudar%20Science%20Center!5e0!3m2!1sru!2str!4v1759635759311!5m2!1sru!2str"
			style={props.style}
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		/>
	)
}

const MapBlock = ({title, address} : {title: string, address: string}) => {
	return (
		<div className="border border-white p-8">
			<h3 className="font-display font-bold text-2xl mb-4">{title}</h3>
			<p className="mb-6 leading-relaxed">{address}</p>
			{/* <div className="aspect-video bg-gray-800 flex items-center justify-center">
									<span className="text-gray-400">[Карта Yıldız Teknopark]</span>
								</div> */}
			<Map className="w-full h-max aspect-square" />
		</div>
	)
}
	export default MapBlock