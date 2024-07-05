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
import toast, { Toaster } from "react-hot-toast";

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
				"https://backend-black-zeta.vercel.app/api/referral",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			console.log("response", response);

			if (response.status === 201) {
				toast.success("Referral Sent Successfully", {
					duration: 4000,
					position: "top-center",
					style: {
						background: "#1E90FF",
						color: "#fff",
						borderRadius: "50px",
						boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
					},
				});

				setLoading(false);
				handleClose();
				reset();
			}
		} catch (error) {
			console.error("Error:", error.message);
			toast.error("Error sending referral");
			setLoading(false);
		}
	};

	return (
		<>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle sx={{ bgcolor: "black", color: "white" }}>
					Refer a Friend
				</DialogTitle>
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
									helperText={
										errors.yourEmail ? errors.yourEmail.message : null
									}
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
						<Button
							variant="contained"
							disabled={loading}
							onClick={handleClose}
							color="error"
						>
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
			<Toaster />
		</>
	);
};

export default ReferralForm;
