import { useState } from "react";


// {items: [], heading: string}
interface Props {
	items: string[],
	heading: string;
}
function ListGroup({items, heading}: Props) {

	// State hook         // convention used in react
	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h1>{heading}</h1>
			{/* used below instead of this { items.length === 0 ? <p>No items Found</p> : null } */}
			{items.length === 0 && <p>No items Found</p>}
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						className={
							selectedIndex === index
								? 'list-group-item active'
								: 'list-group-item'
						}
						key={item}
						onClick={()=> {setSelectedIndex(index)}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
