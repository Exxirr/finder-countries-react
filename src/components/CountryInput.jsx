export const CountryInput = ({ name, onChange, onSubmit }) => {

    return (
        <form onSubmit={onSubmit} className="card p-3 shadow-sm border-0 bg-light">
            <div className="form-group">
                <label htmlFor="country" className="form-label fw-bold text-secondary mb-2">
                    Escribe el nombre de un país
                </label>

                <div className="input-group">
                    <span className="input-group-text bg-primary text-white border-primary">
                        🔍
                    </span>
                    <input
                        type="text"
                        id="country"
                        className="form-control form-control-lg border-primary-subtle"
                        placeholder="Ej: peru, canada, japan..."
                        value={name}
                        onChange={onChange}
                    />
                </div>

                <div className="form-text text-muted mt-2 d-flex align-items-center">
                    <span className="badge bg-secondary-subtle text-secondary me-2">Tip:</span>
                    La búsqueda se ejecutará automáticamente un segundo después de dejar de escribir.
                </div>
            </div>
        </form>
    )
}