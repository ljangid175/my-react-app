import { useState } from "react";

function ListGroup() {
	let items = ["red", "blue", "green", "yellow", "orange"];
	let selectedIndex = 0;

	// hook
	useState

	return (
		<>
			<h1>List Group</h1>
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
						onClick={()=> {selectedIndex === index}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
