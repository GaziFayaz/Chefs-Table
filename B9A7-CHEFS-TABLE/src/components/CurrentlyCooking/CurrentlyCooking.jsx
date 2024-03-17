import React from 'react'
import PropTypes from 'prop-types'

const CurrentlyCooking = props => {
  return (
    <div className="w-full mb-8 text-center">
			<h1 className="currently-cooking-title text-2xl font-semibold">
				Currently cooking: <span>02</span>
				<hr className="w-1/2 text-center mx-auto" />
				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th></th>
								<th>Name</th>
								<th>Time</th>
								<th>Calories</th>
								<th></th>
							</tr>
						</thead>
						<tbody className="text-gray-400">
							{/* row 1 */}
							<tr>
								<th>1</th>
								<td>Cy Ganderton</td>
								<td>Quality Control Specialist</td>
								<td>Blue</td>
								<td className="btn bg-theme rounded-full">Preparing</td>
							</tr>
							{/* row 2 */}
							<tr>
								<th>2</th>
								<td>Hart Hagerty</td>
								<td>Desktop Support Technician</td>
								<td>Purple</td>
								<td className="btn bg-theme rounded-full">Preparing</td>
							</tr>
							{/* row 3 */}
							<tr>
								<th>3</th>
								<td>Brice Swyre</td>
								<td>Tax Accountant</td>
								<td>Red</td>
								<td className="btn bg-theme rounded-full">Preparing</td>
							</tr>
						</tbody>
					</table>
				</div>
			</h1>
		</div>
  )
}

CurrentlyCooking.propTypes = {}

export default CurrentlyCooking