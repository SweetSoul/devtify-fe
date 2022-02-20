import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { CLEAR_AUTH } from "../../reducers/auth.reducer";
import { menuRoutes, routeConfig } from "../../routes/routeConfig";
import { createImageFromInitials } from "../../utils/imageFromText.util";
import CollabLogo from "../Logo/collab.logo";
import styles from "./header.module.sass";
import { BiSearch, BiStore } from "react-icons/bi";
import GenericButton from "../Buttons/genericButton";
import { Popover, PopoverBody } from "reactstrap";
import { Lottie } from "../Lottie/lottie";
import coinData from "../Lottie/animations/coin.json";

export default function Header() {
	const [toggler, setToggler] = useState(false);

	const { authState, updateAuthState } = useAuth();
	const popoverRef = useRef<HTMLDivElement>(null);

	const toggleSearch = () => {};
	const coins = authState?.coins || 0;
	const userAvatar = authState?.avatar || createImageFromInitials(50, authState?.name || "New User", "#0473b1");

	const handleLogout = () => {
		updateAuthState(CLEAR_AUTH);
	};

	return (
		<div className="d-flex py-4 defaultPadding">
			<div className="col-6 d-flex gap-5">
				<Link to={routeConfig.home.path} className={styles.logoContainer}>
					<CollabLogo version="vertical" size="small" />
				</Link>
				<div className="d-flex align-items-center gap-4">
					{menuRoutes.map((route, index) => (
						<Link key={index} to={route.path} className={styles.menuLink}>
							{route.name}
						</Link>
					))}
				</div>
			</div>
			<div className="col-6 d-flex justify-content-end gap-4">
				<Link to={routeConfig.marketplace.path} className={styles.market}>
					<BiStore size="1.5em" />
					<span>Marketplace</span>
				</Link>
				<GenericButton type="button" onClick={toggleSearch} variant="text">
					<BiSearch size="1.5em" />
				</GenericButton>
				<Link to={routeConfig.wallet.path} className={styles.wallet}>
					<Lottie animationData={coinData} width={24} height={24} />
					<span>{coins} BD</span>
				</Link>
				<div className={styles.profile} id="user-menu" ref={popoverRef}>
					<div className="avatar">
						<img src={userAvatar} alt={authState.name || "User Avatar"} />
					</div>
					<span>{authState?.name}</span>
					<span
						className={toggler ? `${styles.afterButton} ${styles.popoverShow}` : styles.afterButton}
					></span>
				</div>
				<Popover
					isOpen={toggler}
					toggle={() => setToggler(!toggler)}
					target={popoverRef}
					trigger="click"
					placement="bottom"
				>
					<PopoverBody>
						<GenericButton type="button" variant="text" onClick={handleLogout}>
							Logout
						</GenericButton>
					</PopoverBody>
				</Popover>
			</div>
		</div>
	);
}
