function InfoTable() {
    return (
        <div className="overflow-x-auto">
            <table className="table text-2xl">
                {/* head */}
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th className="monoton-regular">Name</th>
                        <td>Khandaker Ziaur Rahman</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th className="monoton-regular">Phone</th>
                        <td>+8801793158877</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th className="monoton-regular">Nationality</th>
                        <td>Bangladeshi</td>
                    </tr>
                    <tr>
                        <th className="monoton-regular">Email</th>
                        <td>zrrehan11@gmail.com</td>
                    </tr>
                    <tr>
                        <th className="monoton-regular">Location</th>
                        <td>Dhaka, Bangladesh</td>
                    </tr>
                    <tr>
                        <th className="monoton-regular">Languages</th>
                        <td>English, Bengali</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InfoTable;