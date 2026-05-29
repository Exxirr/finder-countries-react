import { useEffect, useState } from "react"
import { CountryInput } from "./CountryInput"
import { CountryShow } from "./CountryShow"
import { useCountry } from "../hooks/useCountry"

export const CountryComponent = () => {

    const { name, onChange, onSubmit, isLoading, isError, country } = useCountry()

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-primary">
                    <span className="me-2">🌎</span>Buscador de Países
                </h1>
                <p className="text-muted">Consulta información detallada de cualquier país en tiempo real</p>
            </div>

            <div className="row justify-content-center mb-4">
                <div className="col-md-8 col-lg-6">
                    <CountryInput name={name} onChange={onChange} onSubmit={onSubmit} />

                    {isLoading && (
                        <div className="d-flex align-items-center justify-content-center alert alert-info shadow-sm mt-3" role="alert">
                            <div className="spinner-border spinner-border-sm text-info me-3" role="alert"></div>
                            <span>Buscando datos en la base del mundo...</span>
                        </div>
                    )}

                    {isError && (
                        <div className="alert alert-danger shadow-sm mt-3 d-flex align-items-center" role="alert">
                            <span className="me-2">⚠️</span>
                            <div><strong>Error:</strong> {isError}</div>
                        </div>
                    )}
                </div>
            </div>

            <div className="row g-4 justify-content-center">
                <CountryShow country={country} />
            </div>
        </div>
    )

}