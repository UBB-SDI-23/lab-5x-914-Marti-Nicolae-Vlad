import { Card, CardActions, CardContent, IconButton, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import { Payment } from "../../models/Payment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const DetailsPayment = () => {
	const { payID } = useParams();
	const [payment, setPayment] = useState<Payment>();

	useEffect(() => {
		const fetchEmployeeProject = async () => {
			// TODO: use axios instead of fetch
			// TODO: handle errors
			// TODO: handle loading state
            console.log(payID);
			const response = await fetch(`${BACKEND_API_URL}/payments/${payID}`);
			const employeeProject = await response.json();
			setPayment(employeeProject);
		};
		fetchEmployeeProject();
	}, [payID]);


	return (
		<Container>
			<Card>
				<CardContent>
					<Toolbar>
						<IconButton component={Link} sx={{ mr: 3 }} to={`/payments`}>
							<ArrowBackIcon />
						</IconButton>{" "}
					</Toolbar>
					<h1>Payment's Details</h1>
					<p>Actor: {payment?.actor.name}</p>
					<p>Tv Serie: {payment?.tv_serie.title}</p>
					<p>Salary: {payment?.salary}</p>
					<p>Days Worked: {payment?.days_worked}</p>
				</CardContent>
				<CardActions>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/payments/${payID}/edit`}>
						<EditIcon />
					</IconButton>

					<IconButton component={Link} sx={{ mr: 3 }} to={`/payments/${payID}/delete`}>
						<DeleteForeverIcon sx={{ color: "red" }} />
					</IconButton>
				</CardActions>
			</Card>
		</Container>
	);
};