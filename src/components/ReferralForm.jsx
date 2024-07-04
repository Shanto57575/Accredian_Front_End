import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
	TextField,
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ReferralForm = ({ open, handleClose }) => {
	const [loading, setLoading] = useState(false);

	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		try {
			setLoading(true);
			const response = await fetch(
				"https://your-render-backend-url/referrals",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			const result = await response.json();
			console.log("Success:", result);
			setLoading(false);
			handleClose();
			reset();
		} catch (error) {
			console.error("Error:", error);
			setLoading(false);
		}
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Refer a Friend</DialogTitle>
			<form onSubmit={handleSubmit(onSubmit)}>
				<DialogContent>
					<Controller
						name="yourName"
						control={control}
						defaultValue=""
						rules={{ required: "Your Name is required" }}
						render={({ field }) => (
							<TextField
								{...field}
								label="Your Name"
								fullWidth
								margin="normal"
								error={!!errors.yourName}
								helperText={errors.yourName ? errors.yourName.message : null}
							/>
						)}
					/>
					<Controller
						name="yourEmail"
						control={control}
						defaultValue=""
						rules={{
							required: "Your Email is required",
							pattern: {
								value: /^\S+@\S+$/i,
								message: "Invalid email address",
							},
						}}
						render={({ field }) => (
							<TextField
								{...field}
								label="Your Email"
								type="email"
								fullWidth
								margin="normal"
								error={!!errors.yourEmail}
								helperText={errors.yourEmail ? errors.yourEmail.message : null}
							/>
						)}
					/>
					<Controller
						name="friendName"
						control={control}
						defaultValue=""
						rules={{ required: "Friend's Name is required" }}
						render={({ field }) => (
							<TextField
								{...field}
								label="Friend's Name"
								fullWidth
								margin="normal"
								error={!!errors.friendName}
								helperText={
									errors.friendName ? errors.friendName.message : null
								}
							/>
						)}
					/>
					<Controller
						name="friendEmail"
						control={control}
						defaultValue=""
						rules={{
							required: "Friend's Email is required",
							pattern: {
								value: /^\S+@\S+$/i,
								message: "Invalid email address",
							},
						}}
						render={({ field }) => (
							<TextField
								{...field}
								label="Friend's Email"
								type="email"
								fullWidth
								margin="normal"
								error={!!errors.friendEmail}
								helperText={
									errors.friendEmail ? errors.friendEmail.message : null
								}
							/>
						)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					{loading ? (
						<Box sx={{ display: "flex" }}>
							<CircularProgress />
						</Box>
					) : (
						<Button type="submit" variant="contained" color="primary">
							Submit
						</Button>
					)}
				</DialogActions>
			</form>
		</Dialog>
	);
};

export default ReferralForm;
