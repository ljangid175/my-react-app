interface Props {
	children: String;
	color?: 'primary' | 'secondary' | 'danger'; // ? makes this a optional property, setting the list of only acceptable values.
	onClick?: () => void;
}

// color is given a default fallback.
const Button = ({ children, color = "primary", onClick }: Props) => {
	return (
		<div className={"btn btn-" + color} onClick={onClick}>
			{children}
		</div>
	);
};

export default Button;
