import locationIcon from "../../pictures/location.png";
export default function Section(props) {
	const { title, location, googleMapsUrl, startDate, endDate, description, imageUrl } = props;

	return (
		<section>
			<img src={imageUrl} alt="" />

			<div className="info-container">
				<div className="location-container">
					<a href={googleMapsUrl} className="google-maps">
						<img src={locationIcon} alt="" />
					</a>
					<p className="uppercase">{location}</p>
					<a href={googleMapsUrl} className="google-maps">
						View on Google Maps
					</a>
				</div>

				<h1 className="location-name">{title}</h1>
				<strong className="time-period">
					{startDate} - {endDate}
				</strong>
				<p className="place-info">{description}</p>
			</div>
		</section>
	);
}
