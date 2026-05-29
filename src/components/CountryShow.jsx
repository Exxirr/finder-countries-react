export const CountryShow = ({ country }) => {

    if (!country || !Array.isArray(country)) return null;

    return (
        <>
            {country.map(coun => (
                <div key={coun.cca3} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch">
                    <div className="card h-100 shadow border-0 overflow-hidden hover-shadow transition">
                        <div className="ratio ratio-16x9 border-bottom bg-light">
                            <img
                                src={coun.flags.png}
                                alt={coun.flags.alt || `Bandera de ${coun.name.common}`}
                                className="card-img-top object-fit-cover"
                            />
                        </div>


                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title fw-bold text-dark text-truncate mb-1">
                                {coun.name.common}
                            </h5>
                            <p className="text-muted small mb-3">
                                📍 Capital: <span className="text-dark fw-semibold">{coun.capital || 'N/A'}</span>
                            </p>


                            <ul className="list-group list-group-flush mt-auto pt-2 border-top small">
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 bg-transparent">
                                    <span className="text-muted">👥 Población:</span>
                                    <span className="fw-bold text-secondary">
                                        {Number(coun.population).toLocaleString()}
                                    </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 bg-transparent">
                                    <span className="text-muted">🔑 Código:</span>
                                    <span className="badge bg-dark-subtle text-dark fw-mono">{coun.cca3}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}