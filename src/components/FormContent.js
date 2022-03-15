import React, { useRef, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import './FormContent.scss'

export const FormContent = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const estadoRef = useRef()
  const cidadeRef = useRef()
  const bairroRef = useRef()
  const logradouroRef = useRef()

  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    logradouro: '',
  })

  //validar mask campo telefone
  function phoneMaskBrazil() {
    var key = window.event.key
    var element = window.event.target
    var isAllowed = /\d|Backspace|Tab/
    if (!isAllowed.test(key)) window.event.preventDefault()

    var inputValue = element.value
    inputValue = inputValue.replace(/\D/g, '')
    inputValue = inputValue.replace(/(^\d{2})(\d)/, '($1) $2')
    inputValue = inputValue.replace(/(\d{4,5})(\d{4}$)/, '$1-$2')

    element.value = inputValue
  }

  function handleSubmit(event) {
    event.preventDefault()
    const estado = estadoRef.current.value
    const cidade = cidadeRef.current.value
    const bairro = bairroRef.current.value
    const logradouro = logradouroRef.current.value

    setForm({
      ...form,
      estado: estado,
      cidade: cidade,
      bairro: bairro,
      logradouro: logradouro,
    })
    console.log('Form Data', form)
    handleShow(true)
    console.log('depois Form Data', form)
  }

  function clearForm() {
    const empty = {
      nome: '',
      telefone: '',
      email: '',
      cep: '',
      estado: '',
      cidade: '',
      bairro: '',
      logradouro: '',
    }

    setForm({...empty})
    estadoRef.current.value = null
    cidadeRef.current.value = null
    bairroRef.current.value = null
    logradouroRef.current.value = null
  }

  const handleClose = () => {
    clearForm()
    setShow(false)
  }

  function checkCEP(e, form) {
    const cep = e.target.value.replace(/\D/g, '')

    if (cep !== '') {
      var validacep = /^[0-9]{8}$/

      if (validacep.test(cep)) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then((res) => res.json())
          .then((data) => {
            estadoRef.current.value = data.uf
            cidadeRef.current.value = data.localidade
            bairroRef.current.value = data.bairro
            logradouroRef.current.value = data.logradouro
          })
      } else {
        alert('Formato de CEP inválido.')
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="main-form">
        <div className="form-title">
          <h1>Inscreva-se gratuitamente</h1>
        </div>
        <div className="form-body">
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="validationDefault01">Nome Completo</label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={(e) => {
                  setForm({ ...form, nome: e.target.value })
                }}
                id="validationDefault01"
                required
                className="form-control"
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="validationDefault01">Telefone</label>
              <input
                type="text"
                onKeyDown={phoneMaskBrazil}
                name="telefone"
                value={form.telefone}
                onChange={(e) => {
                  setForm({ ...form, telefone: e.target.value })
                }}
                maxLength="15"
                id="validationDefault01"
                required
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-12 ">
              <label htmlFor="validationDefault01">E-mail</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value })
                }}
                id="validationDefault01"
                required
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="validationDefault01">CEP</label>
              <input
                type="text"
                name="cep"
                value={form.cep}
                onChange={(e) => {
                  setForm({ ...form, cep: e.target.value })
                }}
                onBlur={checkCEP}
                maxLength="8"
                id="validationDefault01"
                required
                className="form-control"
              />
            </div>

            <div className="form-group col-md-6">
              <div className="input-container">
                <label htmlFor="validationDefault01">Estado </label>
                <input
                  type="text"
                  name="estado"
                  ref={estadoRef}
                  id="validationDefault01"
                  required
                  className="form-control estado"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="validationDefault01">Cidade</label>
              <input
                type="text"
                name="cidade"
                ref={cidadeRef}
                id="validationDefault01"
                required
                className="form-control"
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="validationDefault01">Bairro</label>
              <input
                type="text"
                name="bairro"
                ref={bairroRef}
                id="validationDefault01"
                required
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-12">
              <label htmlFor="validationDefault01">Logradouro</label>
              <input
                type="text"
                name="logradouro"
                ref={logradouroRef}
                id="validationDefault01"
                required
                className="form-control"
              />
            </div>
          </div>
          <div className="button-submit">
            <button type="submit" className="btn-submit">
              ENVIAR
            </button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inscrito com Sucesso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>{form.nome}</strong>, será um prazer te encontrar em nosso
          evento, estaremos enviando todas as orientações para seu e-mail:{' '}
          {form.email} !
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </form>
  )
}
