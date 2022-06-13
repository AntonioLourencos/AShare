import newSocialValidation from "@App/validation/services/newSocial";
import socialValidation from "@App/validation/services/SocialValidation";
import React from "react";
import { toast } from "react-toastify";
import type IShowDashboard from "@App/interfaces/helpers/IShowDashboard";
import type INewSocial from "@App/interfaces/services/request/newSocial";
import type ISocial from "@App/interfaces/services/response/Social";
import { Field, Formik, type FormikHelpers } from "formik";
import Icon from "@App/components/Icon";
import * as Styles from "./styles";
import optionsSocial from "@App/helpers/socials";

const SocialMidia = () => {
	const [socialShow, setSocialShow] = React.useState<IShowDashboard>({
		show: true,
		showAdded: true,
	});
	const [listEditSocialMidia, setListEditSocialMidia] = React.useState<
		string[]
	>([]);

	const [listSocialMidia, setListSocialMidia] = React.useState<ISocial[]>([]);

	const defaultValueToNewSocial: INewSocial = { name: "", url: "" };

	const handleNewSocialMidia = async (
		data: INewSocial,
		formikHelper: FormikHelpers<INewSocial>
	) => {
		try {
			const dataValidated = await newSocialValidation.validate(data);

			setListSocialMidia([
				...listSocialMidia,
				{ ...dataValidated, id: String(listSocialMidia.length + 1) },
			]);

			formikHelper.resetForm();
		} catch (yupError: any) {
			if (yupError.errors[0]) {
				return toast.error(yupError.errors[0]);
			}

			return toast.error("Happend an Error... Please Try Again.");
		}
	};

	const handleEditSocialMidia = async (
		data: ISocial,
		formikHelper: FormikHelpers<ISocial>
	) => {
		try {
			const dataValidated = await socialValidation.validate(data);

			setListSocialMidia((listEdit) => {
				listEdit.forEach((data, key) => {
					if (data.id.includes(dataValidated.id)) {
						listEdit[key] = dataValidated;
					}
				});

				return [...listEdit];
			});

			formikHelper.resetForm({
				values: {
					id: "",
					name: "",
					url: "",
				},
			});

			handleEditSocialMidiaAdded(dataValidated);
		} catch (yupError: any) {
			if (yupError.errors[0]) {
				return toast.error(yupError.errors[0]);
			}

			return toast.error("Happend an Error... Please Try Again.");
		}
	};

	const handleShowSocial = () => {
		setSocialShow({
			show: !socialShow.show,
			showAdded: socialShow.showAdded,
		});
	};

	const handleShowAddedSocial = () => {
		setSocialShow({
			show: socialShow.show,
			showAdded: !socialShow.showAdded,
		});
	};

	const handleEditSocialMidiaAdded = (social: ISocial) => {
		if (listEditSocialMidia.includes(social.id)) {
			return setListEditSocialMidia((listEdit) => {
				listEdit.forEach((id, key) => {
					if (id.includes(social.id)) {
						listEdit.splice(key, 1);
					}
				});

				return [...listEdit];
			});
		}

		return setListEditSocialMidia([...listEditSocialMidia, social.id]);
	};

	const handleRemoveSocialMidiaAdded = (social: ISocial) => {
		return setListSocialMidia((listEdit) => {
			listEdit.forEach((data, key) => {
				if (data.id.includes(social.id)) {
					listEdit.splice(key, 1);
				}
			});

			return [...listEdit];
		});
	};

	return (
		<Styles.Container show={socialShow.show}>
			<div className="headerAll" onClick={handleShowSocial}>
				<h2>Social Midia</h2>
				<div className="arrowAll">
					<Icon name="arrow-down-s" />
				</div>
			</div>
			<div className="bodyAll">
				<Styles.NewSocial>
					<h3>New Social Midia</h3>
					<Formik
						initialValues={defaultValueToNewSocial}
						onSubmit={handleNewSocialMidia}
					>
						<Styles.FormCard>
							<Field as="select" name="name">
								<option selected disabled value="">
									Choose an Icon
								</option>
								{optionsSocial.map((name, key) => {
									return (
										<option key={key} value={name}>
											{name}
										</option>
									);
								})}
							</Field>
							<Field
								type="text"
								name="url"
								placeholder="http://github.com/antoniolourencos"
							/>
							<button type="submit">
								<Icon name="check" />
							</button>
						</Styles.FormCard>
					</Formik>
				</Styles.NewSocial>

				{listSocialMidia.length >= 1 && (
					<Styles.Socials showAdded={socialShow.showAdded}>
						<div className="headerListAdded" onClick={handleShowAddedSocial}>
							<h2>Socials Midias</h2>
							<div className="arrowListAdded">
								<Icon name="arrow-down-s" />
							</div>
						</div>
						<div className="bodyListAdded">
							{listSocialMidia.map((data, key) => {
								if (listEditSocialMidia.includes(data.id)) {
									return (
										<Formik
											initialValues={data}
											onSubmit={handleEditSocialMidia}
										>
											<Styles.FormCard>
												<Field as="select" name="name">
													<option selected disabled value="">
														Choose an Icon
													</option>
													{optionsSocial.map((name, key) => {
														return (
															<option key={key} value={name}>
																{name}
															</option>
														);
													})}
												</Field>
												<Field
													type="text"
													name="url"
													placeholder="http://github.com/antoniolourencos"
												/>
												<button type="submit">
													<Icon name="check" />
												</button>
												<Icon
													name="close"
													action={() => handleEditSocialMidiaAdded(data)}
												/>
											</Styles.FormCard>
										</Formik>
									);
								}
								return (
									<Styles.Card key={key}>
										<Icon name={data.name} />
										<input value={data.url} disabled />
										<Icon
											name="pencil"
											type="line"
											action={() => handleEditSocialMidiaAdded(data)}
										/>
										<Icon
											name="delete-bin-7"
											type="line"
											action={() => handleRemoveSocialMidiaAdded(data)}
										/>
									</Styles.Card>
								);
							})}
						</div>
					</Styles.Socials>
				)}
			</div>
		</Styles.Container>
	);
};

export default SocialMidia;
