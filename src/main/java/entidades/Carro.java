package entidades;

public class Carro {

	private Integer id;
	private String marca;
	private String modelo;
	private Integer anoFrabricacao;
	private Integer anoModelo;
	private Double valor;
	private String descricao;

	public Carro(Integer id, String marca, String modelo, Integer anoFrabricacao, Integer anoModelo, Double valor,
			String descricao) {
		this.id = id;
		this.marca = marca;
		this.modelo = modelo;
		this.anoFrabricacao = anoFrabricacao;
		this.anoModelo = anoModelo;
		this.valor = valor;
		this.descricao = descricao;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public Integer getAnofrabricacao() {
		return anoFrabricacao;
	}

	public void setAnofrabricacao(Integer anofrabricacao) {
		this.anoFrabricacao = anofrabricacao;
	}

	public Integer getAnoModelo() {
		return anoModelo;
	}

	public void setAnoModelo(Integer anoModelo) {
		this.anoModelo = anoModelo;
	}

	public Double getValor() {
		return valor;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

}
