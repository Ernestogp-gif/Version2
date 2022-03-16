package com.example.pagos.model;

import java.sql.Time;
import java.util.Date;

public class Transaccion {

	private float monto_transaccion;
	private String ruc_comercio;
	public Transaccion() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Transaccion(String cod_transaccion, float monto_transaccion, Time hora_transaccion, Date fecha_transaccion,
			String ruc_comercio, String cod_billetera) {
		super();
		this.monto_transaccion = monto_transaccion;
		this.ruc_comercio = ruc_comercio;
	}
	public float getMonto_transaccion() {
		return monto_transaccion;
	}
	public void setMonto_transaccion(float monto_transaccion) {
		this.monto_transaccion = monto_transaccion;
	}
	public String getRuc_comercio() {
		return ruc_comercio;
	}
	public void setRuc_comercio(String ruc_comercio) {
		this.ruc_comercio = ruc_comercio;
	}
}
