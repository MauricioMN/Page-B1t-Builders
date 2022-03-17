import React, { useRef, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import statesData from '../../states.json'
import './FormContent.scss'

export const FormContent = () => {
  const [lgShow, setLgShow] = useState(false)
  const [showCepError, setShowCepError] = useState(false)
  const [cepErrorMsg, setCepErrorMsg] = useState('')
  const handleShow = () => setLgShow(true)
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
  function formatTelephone() {
    var key = window.event.key
    var element = window.event.target
    var isAllowed = /\d|Backspace|Tab/
    if (!isAllowed.test(key)) window.event.preventDefault()

    var inputValue = element.value
    inputValue = inputValue.toString().replace(/\D/g, '')
    // Coloca parênteses em volta dos dois primeiros dígitos
    inputValue = inputValue.replace(/^(\d\d)(\d)/g, '($1) $2')
    // Número com 8 dígitos. Formato: (99) 9999-9999
    if (inputValue.length < 14)
      inputValue = inputValue.replace(/(\d{4})(\d)/, '$1-$2')
    // Número com 9 dígitos. Formato: (99) 99999-9999
    else inputValue = inputValue.replace(/(\d{5})(\d)/, '$1-$2')

    element.value = inputValue
  }

  function handleSubmit(event) {
    try {
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
    } catch (err) {
      console.log(err)
    }
  }

  //Func. Limpar o formulario ao ser enviado
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

    setForm({ ...empty })
    estadoRef.current.value = null
    cidadeRef.current.value = null
    bairroRef.current.value = null
    logradouroRef.current.value = null
  }

  //Limpar form e fechar modal
  const handleClose = () => {
    clearForm()
    setLgShow(false)
  }

  //Pegar o primeiro nome, remover espacos e colocar primeira letra maiuscula
  const firstName = form.nome.trim().split(' ')
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  //Consultar Api APICep, validar o cep enviado
  function checkCEP(e) {
    const cep = e.target.value.replace(/\D/g, '')

    if (cep !== '') {
      var validacep = /^[0-9]{8}$/

      if (validacep.test(cep)) {
        fetch(`https://ws.apicep.com/cep/${cep}.json`)
          .then((res) => res.json())
          .then((data) => {
            if (data.status == 200) {
              estadoRef.current.value = data.state
              cidadeRef.current.value = data.city
              bairroRef.current.value = data.district
              logradouroRef.current.value = data.address
              setShowCepError(false)
              setCepErrorMsg('')
            } else {
              setShowCepError(true)
              setCepErrorMsg(data.message)
            }
          })
          .catch((err) => {
            console.log('erro', err)
          })
      } else {
        setShowCepError(true)
        setCepErrorMsg('CEP inválido')
      }
    }
  }

  //Formatar o campo Cep #####-###
  function formatCep(e) {
    e.currentTarget.maxLength = 9
    let value = e.currentTarget.value
    value = value.replace(/\D/g, '')
    value = value.replace(/^(\d{5})(\d)/, '$1-$2')
    e.currentTarget.value = value
    return e
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id="form" className="main-form">
        <div className="form-title">
          <h1>Inscreva-se gratuitamente</h1>
        </div>
        <div className="form-body">
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="validationDefault01">Nome Completo*</label>
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
              <label htmlFor="validationDefault01">Telefone*</label>
              <input
                type="text"
                onKeyUp={formatTelephone}
                name="telefone"
                value={form.telefone}
                onChange={(e) => {
                  setForm({ ...form, telefone: e.target.value })
                }}
                minLength="14"
                maxLength="15"
                id="validationDefault01"
                required
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-12 ">
              <label htmlFor="validationDefault01">E-mail*</label>
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
              <label htmlFor="validationDefault01">
                CEP* 
                <span> {showCepError ? cepErrorMsg : ''}</span>
              </label>
              <input
                type="text"
                name="cep"
                value={form.cep}
                onChange={(e) => {
                  setForm({ ...form, cep: e.target.value })
                }}
                onBlur={checkCEP}
                onKeyUp={formatCep}
                id="validationDefault01"
                maxLength="9"
                required
                className="form-control"
              />
            </div>

            <div className="form-group col-md-6">
              <div className="input-container">
                <div className="estado">
                  <label htmlFor="validationDefault01">Estado* </label>

                  <select
                    type="text"
                    name="estado"
                    ref={estadoRef}
                    id="validationDefault01"
                    required
                    className="form-control"
                  >
                    {statesData.map((render, index) => {
                      return (
                        <option value={render.value} key={index}>
                          {render.nome}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="validationDefault01">Cidade*</label>
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
              <label htmlFor="validationDefault01">Bairro*</label>
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
              <label htmlFor="validationDefault01">Logradouro*</label>
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
      <Modal
        size="lg"
        show={lgShow}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Inscrito com Sucesso!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>{capitalizeFirstLetter(firstName[0])}</strong>, será um prazer
          te encontrar em nosso evento, estaremos enviando todas as orientações
          para seu e-mail: {form.email} !
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
