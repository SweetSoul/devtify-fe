import styles from "./baires.logo.module.sass";

interface IProps {
	size?: "small" | "medium" | "large";
	className?: string;
}

export default function BairesLogo(props: IProps) {
	return (
		<div className={`${props.className ? props.className : ""} ${props.size ? styles[props.size] : ""}`}>
			<svg
				version="1.1"
				id="BairesLogo"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 150 30"
				xmlSpace="preserve"
			>
				<g>
					<path
						fill="#0272B1"
						d="M21.8,0.1H7c-3.8,0-6.9,3.2-6.9,7.1v14.3c0,3.9,3.1,7.1,6.9,7.1h14.8c3.8,0,6.9-3.2,6.9-7.1V7.3
                C28.7,3.3,25.6,0.1,21.8,0.1 M5.5,17.8c-3-3.4-2.8-11.2,2.4-13.7c2.6-1.2,5.2,1.3,3.7,3.2C7.9,12,5.5,17.6,5.5,17.8 M7.2,17.8
                c0.5-1.1,3.9-8.1,7.3-11.4c3.6-3.6,11.2,4,7.6,7.6c-3.4,3.4-10.4,6.8-11.4,7.3C9,22,6.5,19.5,7.2,17.8 M24.3,20.6
                C21.9,25.8,14.1,26,10.7,23c0.2,0,5.8-2.4,10.5-6C23.1,15.4,25.5,18.1,24.3,20.6"
					/>
					<path
						fill="#0272B1"
						d="M43.6,13.7c1.6-0.7,2.4-2,2.4-3.9c0-1.5-0.5-2.6-1.5-3.4S42,5.2,40.2,5.2h-6.7v18.4h7.1c2,0,3.6-0.5,4.7-1.4
                c1.1-0.9,1.7-2.2,1.7-3.9c0-1.1-0.3-2-0.9-2.9C45.4,14.6,44.6,14.1,43.6,13.7 M36.3,7.7h3.4c1.1,0,1.9,0.2,2.4,0.6
                c0.5,0.4,0.8,1,0.8,1.8c0,1-0.3,1.7-0.8,2.1c-0.6,0.5-1.4,0.7-2.6,0.7h-3.2V7.7z M42.9,20.4c-0.6,0.5-1.4,0.7-2.5,0.7h-4.1v-5.8
                h3.8c2.4,0,3.7,1,3.7,2.9C43.8,19.2,43.5,19.9,42.9,20.4"
					/>
					<path
						fill="#0272B1"
						d="M58.6,13.1c-0.4-0.7-1-1.2-1.7-1.5c-0.7-0.4-1.5-0.5-2.4-0.5c-1.1,0-2.1,0.3-3.1,0.9c-0.9,0.6-1.6,1.4-2.1,2.4
                c-0.5,1-0.7,2.1-0.7,3.2c0,1.3,0.3,2.4,0.8,3.4c0.5,1,1.2,1.7,2.1,2.3c0.9,0.5,1.9,0.8,3,0.8c2,0,3.4-0.7,4.3-2.1l0,1.7h2.7V11.4
                h-2.7L58.6,13.1z M57.7,20.3c-0.7,0.7-1.6,1.1-2.7,1.1c-1.1,0-2-0.4-2.7-1.1c-0.7-0.7-1-1.7-1-2.9s0.3-2.1,1-2.9
                c0.7-0.7,1.6-1.1,2.7-1.1c1.1,0,2,0.4,2.7,1.1c0.7,0.7,1,1.7,1,2.9S58.3,19.6,57.7,20.3"
					/>
					<rect x="64.2" y="11.4" fill="#0272B1" width="2.8" height="12.2" />
					<path
						fill="#0272B1"
						d="M65.6,5.1c-0.5,0-0.9,0.2-1.2,0.5c-0.3,0.3-0.5,0.7-0.5,1.2c0,0.5,0.2,0.9,0.5,1.2c0.3,0.3,0.7,0.5,1.2,0.5
                c0.5,0,0.9-0.2,1.2-0.5c0.3-0.3,0.5-0.7,0.5-1.2c0-0.5-0.2-0.9-0.5-1.2C66.5,5.3,66.1,5.1,65.6,5.1"
					/>
					<path
						fill="#0272B1"
						d="M76.2,11.2c-0.8,0-1.5,0.2-2.1,0.6c-0.6,0.4-1.1,0.9-1.4,1.7l0-2.1H70v12.2h2.8v-5.7c0-1.3,0.3-2.3,0.8-3
                c0.5-0.7,1.3-1.1,2.3-1.1c0.5,0,1,0.1,1.4,0.3l0.3-2.6c-0.2-0.1-0.4-0.1-0.7-0.2C76.6,11.2,76.4,11.2,76.2,11.2"
					/>
					<path
						fill="#0272B1"
						d="M87.3,11.7c-0.9-0.5-1.8-0.7-3-0.7c-1.2,0-2.3,0.3-3.2,0.9c-0.9,0.6-1.7,1.3-2.2,2.3c-0.5,1-0.8,2.1-0.8,3.3
                c0,1.3,0.3,2.5,0.9,3.5c0.6,1,1.4,1.7,2.4,2.2c1,0.5,2,0.8,3.4,0.8c0.9,0,1.4-0.1,2.2-0.3c0.8-0.2,1.5-0.4,2.1-0.8l-0.3-2.2
                c-1.3,0.6-2.4,0.9-3.8,0.9c-1.2,0-2-0.3-2.7-0.9c-0.8-0.6-1.2-1.4-1.4-2.4h9C90,18.1,90,17.6,90,17c0-1.2-0.2-2.3-0.7-3.2
                C88.8,12.9,88.2,12.2,87.3,11.7 M80.9,16.3c0.1-1,0.5-1.8,1.1-2.3c0.6-0.5,1.3-0.8,2.2-0.8c0.9,0,1.7,0.3,2.2,0.8
                c0.5,0.5,0.8,1.3,0.9,2.3H80.9z"
					/>
					<path
						fill="#0272B1"
						d="M97.1,16.2c-0.6-0.2-1.1-0.3-1.5-0.5c-0.3-0.2-0.6-0.3-0.7-0.5c-0.1-0.2-0.2-0.4-0.2-0.7
                c0-0.4,0.2-0.7,0.6-0.9c0.4-0.2,0.9-0.3,1.6-0.3c0.6,0,1.2,0.1,1.8,0.3c0.6,0.2,1.2,0.4,1.7,0.7l0.4-2.3c-0.5-0.3-1-0.5-1.8-0.7
                c-0.7-0.2-1.4-0.3-2.2-0.3c-1.5,0-2.6,0.3-3.5,1c-0.9,0.7-1.3,1.6-1.3,2.7c0,1,0.3,1.7,0.9,2.3c0.6,0.6,1.6,1.1,3,1.5
                c0.7,0.2,1.2,0.4,1.6,0.5c0.4,0.2,0.6,0.3,0.8,0.5c0.2,0.2,0.2,0.4,0.2,0.8c0,0.9-0.8,1.4-2.5,1.4c-0.6,0-1.3-0.1-2.1-0.4
                c-0.7-0.2-1.3-0.5-1.9-0.9l-0.4,2.3c0.5,0.4,1.1,0.6,1.9,0.8c0.8,0.2,1.6,0.3,2.5,0.3c1.6,0,2.8-0.3,3.8-1c0.9-0.7,1.4-1.6,1.4-2.7
                c0-1-0.3-1.8-1-2.4C99.7,17.2,98.6,16.7,97.1,16.2"
					/>
					<path
						fill="#0272B1"
						d="M118.2,7.4c-1.8-1.6-4.4-2.5-7.6-2.5h-7.3v18.9h7c3.3,0,6-0.8,7.8-2.5c1.9-1.7,2.8-4,2.8-7
                C121,11.4,120.1,9.1,118.2,7.4 M116.6,14.4c0,4-2.1,5.9-6.3,5.9h-2.7V8.5h2.8C114.6,8.5,116.6,10.4,116.6,14.4"
					/>
					<path
						fill="#0272B1"
						d="M132.5,11.4c-0.9-0.5-2-0.8-3.2-0.8c-1.3,0-2.5,0.3-3.5,0.9c-1,0.6-1.8,1.4-2.3,2.5c-0.5,1-0.8,2.2-0.8,3.5
                c0,1.4,0.3,2.6,0.9,3.6c0.6,1,1.5,1.8,2.6,2.4c1.1,0.5,2.1,0.8,3.6,0.8c0.9,0,1.6-0.1,2.4-0.3c0.9-0.2,1.6-0.4,2.2-0.8l0.2-0.1
                l-0.4-3.2l-0.4,0.2c-0.5,0.3-1.2,0.5-1.8,0.6c-0.7,0.1-1.1,0.2-1.8,0.2c-2.1,0-3.1-0.7-3.5-2.2h8.5l0-0.2c0.1-0.4,0.1-1,0.1-1.5
                c0-1.3-0.3-2.4-0.8-3.4C134.1,12.6,133.4,11.9,132.5,11.4 M131.6,15.8h-4.9c0.2-0.6,0.4-1.1,0.8-1.5c0.4-0.4,1-0.6,1.7-0.6
                c0.7,0,1.3,0.2,1.7,0.6C131.3,14.7,131.5,15.2,131.6,15.8"
					/>
					<polygon
						fill="#0272B1"
						points="145.8,11 143,19.2 140.4,11 136.1,11 141,23.9 144.9,23.9 149.9,11     "
					/>
				</g>
			</svg>
		</div>
	);
}
