const AppointmentInfo = ({ appointment}) => {

    return (
        <li className="appointmentli">
            <h4 className="flex-none font-medium text-2xl text-blue-500">{appointment.petName}</h4>
            <h6 className="flex-grow text-right">{appointment.aptDate}</h6>
            <p className="elementpara">{appointment.aptNotes}</p>
        </li>
    )
}
export default AppointmentInfo;