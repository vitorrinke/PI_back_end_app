import express, { Router } from 'express'

const router: Router = express.Router()

import { OrcamentosController } from '../controllers/orcamentosController'
const orcamentos_controller = new OrcamentosController

import { OrcamentoItensController } from '../controllers/orcamentoItensController'
const orcamento_itens_controller = new OrcamentoItensController()

import { ServicosController } from '../controllers/servicosController'
const servicos_controller = new ServicosController()

import { UsersController } from '../controllers/usersController'
const users_controller = new UsersController()

import { AdminAuthorization } from '../middleware/AdminAuthorization'
const admin_authorization = new AdminAuthorization()




// orcamentos
router.post('/orcamento', orcamentos_controller.createOrcamento)

router.get('/orcamento/:id', orcamentos_controller.findOrcamentoById)
router.get('/orcamentos', orcamentos_controller.findAllOrcamentos)
router.get('/view_orcamentos', orcamentos_controller.findOrcamentoByView)
router.get('/view_all_orcamentos', orcamentos_controller.findOrcamentosByView)
router.get('/view_orcamentos_meu_servicos/:id_cliente', orcamentos_controller.findMeuOrcamentoByView)

router.put('/orcamento/:id', orcamentos_controller.updateOrcamento)

router.delete('/orcamento/:id', orcamentos_controller.deleteOrcamento)


// orcamentos_itens route
router.post('/orcamento_iten', orcamento_itens_controller.createOrcamentoIten)

router.get('/orcamento_iten/:id', orcamento_itens_controller.findOrcamentoItenById)
router.get('/orcamento_itens/:id_orcamento', orcamento_itens_controller.findAllOrcamentoItensById)


router.put('/orcamento_iten/:id', orcamento_itens_controller.updateOrcamentoIten)

router.delete('/orcamento_iten/:id', orcamento_itens_controller.deleteOrcamentoIten)



//servicos route
router.post('/servico', servicos_controller.createServico)

router.get('/servico/:id', servicos_controller.findServicoById)
router.get('/servicos', servicos_controller.findAllServicos)
router.get('/view_servicos', servicos_controller.findServicoByView)
router.get('/view_servicos_view', servicos_controller.findAllServicoByView)
router.get('/view_meu_servicos', servicos_controller.findMeuServicosView)

router.put('/servico/:id', servicos_controller.updateServico)

router.delete('/servico/:id', servicos_controller.deleteServico)


// users route
router.post('/user',  users_controller.createUser)
router.post('/login', users_controller.login)



router.get('/user/:id', admin_authorization.auth, users_controller.findUserById)
router.get('/users',  users_controller.findAllUsers)
router.get('/view_users', users_controller.findUsersByView)

router.put('/user/:id', admin_authorization.auth,users_controller.updateUser)

router.delete('/user/:id', admin_authorization.auth, users_controller.deleteUser)

export default router 
