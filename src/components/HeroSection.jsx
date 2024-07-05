import React, { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ReferralForm from "./ReferralForm";
import { Toaster } from "react-hot-toast";

const navigation = [
	{ name: "Refer & Earn", href: "#" },
	{ name: "Resources", href: "#" },
	{ name: "About Us", href: "#" },
	{ name: "Login", href: "#" },
];

const HeroSection = () => {
	const [open, setOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleMobileMenuToggle = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<div className="bg-white">
			<header className="absolute inset-x-0 top-0 z-50">
				<nav
					className="flex items-center justify-between p-6 lg:px-8"
					aria-label="Global"
				>
					<div className="flex lg:flex-1">
						<Typography variant="h4" className="text-sky-600">
							Accredian
						</Typography>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							onClick={handleMobileMenuToggle}
						>
							<span className="sr-only">Open main menu</span>
							<MenuIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="font-semibold text-md leading-6 text-gray-900"
							>
								{item.name}
							</a>
						))}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<a
							href="#"
							className="bg-blue-400 hover:bg-blue-500 text-white px-3 py-2 rounded-sm text-sm font-semibold leading-6"
						>
							Try For Free <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</nav>
			</header>

			{mobileMenuOpen && (
				<div className="lg:hidden">
					<div className="fixed inset-0 z-50" />
					<div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<Typography variant="h4" className="text-sky-600">
								Accredian
							</Typography>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={handleMobileMenuToggle}
							>
								<span className="sr-only">Close menu</span>
								<CloseIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>
											{item.name}
										</a>
									))}
								</div>
								<div className="py-6">
									<a
										href="#"
										className="bg-blue-400 hover:bg-blue-500 text-white px-3 py-2 rounded-sm text-sm font-semibold leading-6"
									>
										Try For Free <span aria-hidden="true">&rarr;</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
				<div className="mx-auto max-w-2xl py-32 sm:py-48">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
						<div className="relative rounded-full px-3 py-1 text-sm font-black leading-6 ring-1 text-gray-700 ring-gray-900/10 hover:ring-gray-900/20">
							Get A Chance to Win Up-to 150000
							<a href="#" className="font-semibold text-blue-600 ml-2">
								<span className="absolute inset-0" aria-hidden="true" />
								Read more <span aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</div>
					<div className="text-center">
						<h1 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Let's Learn & Earn
						</h1>
						<p className="mt-6 text-sm md:text-lg leading-8 text-gray-600">
							Dive into a transformative learning experience with Learn & Earn,
							where knowledge meets rewards. Explore a curated selection of
							courses, enhance your skills, and earn incentives for your
							progress
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								variant="contained"
								color="primary"
								className="cursor-pointer rounded-sm bg-blue-500 p-1.5 md:px-3.5 md:py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Get started
							</a>
							<a
								variant="contained"
								color="primary"
								onClick={handleOpen}
								className="cursor-pointer rounded-sm bg-blue-500 p-1.5 md:px-3.5 md:py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Refer Now <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
			</div>

			<Modal open={open} onClose={handleClose}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 400,
						bgcolor: "background.paper",
						border: "2px solid #000",
						boxShadow: 24,
						p: 4,
					}}
				>
					<ReferralForm open={open} handleClose={handleClose} />
				</Box>
			</Modal>
			<Toaster />
		</div>
	);
};

export default HeroSection;
