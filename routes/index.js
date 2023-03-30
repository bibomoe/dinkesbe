import express from 'express'

// Token
import { getDataUser, insertDataUser, login, logout, changePassword, loginadmin, logoutadmin } from '../controllers/UsersController.js'
import { verifyToken } from '../middleware/VerifyToken.js'
import { refreshToken } from '../controllers/RefreshToken.js'

// References
import { getDataRumahSakit, getDataRumahSakitFilterbyKabKotaId } from '../controllers/RumahSakitController.js'
import { getDataJenisPelayanan } from '../controllers/JenisPelayananController.js'
import { getDataCaraPembayaran } from '../controllers/CaraPembayaranController.js'
import { getDataJenisSpesialis } from '../controllers/JenisSpesialisController.js'
import { getDataJenisKegiatan, getDataJenisKegiatanLab } from '../controllers/JenisKegiatanController.js'
import { getDataJenisTindakan, getDataGroupJenisTindakan } from '../controllers/JenisGroupTindakanController.js'
import { getMetoda } from '../controllers/MetodaController.js'
import { getGolonganObat } from '../controllers/GolonganObatController.js'
import { getNoUrut } from '../controllers/NoUrutController.js'
import { getIcd10 } from '../controllers/Icd10Controller.js'
import { getDataJenisGolSebabPenyakit, getDataJenisGolSebabPenyakitA, getDataJenisGolSebabPenyakitAbyId, getDataJenisGolSebabPenyakitASebab} from "../controllers/JenisGolSebabPenyakitController.js"
import { getDataJenisGolonganSebabPenyakit, getDataJenisGolonganSebabPenyakitB, getDataJenisGolonganSebabPenyakitBId } from '../controllers/JenisGolonganSebabPenyakitController.js'
import { getDataJenisGolonganPenyakitB, getDataJenisGolonganPenyakitBId} from '../controllers/JenisGolonganPenyakitController.js'
import { getDataKabKota, getDataKabKotabyID } from '../controllers/KabKotaController.js'
import { getDataValidasiByRsId, insertValidasi, updateValidasi, getStatusValidasi } from '../controllers/ValidasiController.js'


// RL 3.4
import { getDataRLTigaTitikEmpat, getRLTigaTitikEmpatById, 
    insertDataRLTigaTitikEmpat, updateDataRLTigaTitikEmpat, deleteDataRLTigaTitikEmpat, getDataRLTigaTitikEmpatKodeRSTahun  } from '../controllers/RLTigaTitikEmpatController.js'

// RL 3.5
import { getDataRLTigaTitikLima, getRLTigaTitikLimaById, 
    insertDataRLTigaTitikLima, updateDataRLTigaTitikLima, deleteDataRLTigaTitikLima, getDataRLTigaTitikLimaKodeRSTahun} from '../controllers/RLTigaTitikLimaController.js'

// RL 5.1
import { getDataRLLimaTitikSatu, getRLLimaTitikSatuById, insertDataRLLimaTitikSatu, 
    updateDataRLLimaTitikSatu, deleteDataRLLimaTitikSatu,  getDataRLLimaTitikSatuKodeRSTahun } from '../controllers/RLLimaTitikSatuController.js'

// RL 5.2
import { getDataRLLimaTitikDua, getRLLimaTitikDuaById, insertDataRLLimaTitikDua, 
    updateDataRLLimaTitikDua, deleteDataRLLimaTitikDua, getDataRLLimaTitikDuaKodeRSTahun } from '../controllers/RLLimaTitikDuaController.js'

const router = express.Router()

// Rumah Sakit
router.get('/apisirs/rumahsakit/:id', verifyToken, getDataRumahSakit)

// User
router.get('/apisirs/users', verifyToken, getDataUser)
router.post('/apisirs/users', insertDataUser)
router.patch('/apisirs/users/:id/admin', verifyToken, changePassword)

// Token
router.post('/apisirs/login', login)
router.delete('/apisirs/logout', logout)
router.get('/apisirs/token', refreshToken)

// Jenis Pelayanan
router.get('/apisirs/jenispelayanan', verifyToken,
    getDataJenisPelayanan)

// Cara Pembayaran
router.get('/apisirs/carapembayaran', verifyToken,
    getDataCaraPembayaran)

// Jenis Kegiatan
router.get('/apisirs/jeniskegiatan', verifyToken,
getDataJenisKegiatan)
//Jenis Kegiatan Lab 3.8
router.get('/apisirs/jeniskegiatanlab', verifyToken,
getDataJenisKegiatanLab)

// Jenis Spesialis
router.get('/apisirs/jenisspesialis', verifyToken,
    getDataJenisSpesialis)

// Group Jenis Tindakan
router.get('/apisirs/jenisgrouptindakan', verifyToken, getDataGroupJenisTindakan)

// Jenis Golongan Sebab Penyakit
router.get(
    "/apisirs/jenisgolsebabpenyakit",
    verifyToken,
    getDataJenisGolSebabPenyakit
)
router.get(
    "/apisirs/jenisgolsebabpenyakita/cari",
    verifyToken,
    getDataJenisGolSebabPenyakitA
)
router.get(
    "/apisirs/jenisgolsebabpenyakitasebab/cari",
    verifyToken,
    getDataJenisGolSebabPenyakitASebab
)
router.get(
    "/apisirs/jenisgolsebabpenyakita/id",
    verifyToken,
    getDataJenisGolSebabPenyakitAbyId
)

router.get('/apisirs/jenisgolongansebabpenyakit', verifyToken, getDataJenisGolonganSebabPenyakit)

// RL 3.4
router.post('/apisirs/rltigatitikempat', verifyToken, insertDataRLTigaTitikEmpat)
router.get('/apisirs/rltigatitikempat', verifyToken, getDataRLTigaTitikEmpat)
router.get('/apisirs/rltigatitikempatdetail/:id',verifyToken, getRLTigaTitikEmpatById)
router.delete('/apisirs/rltigatitikempat/:id', verifyToken, deleteDataRLTigaTitikEmpat)
router.patch('/apisirs/rltigatitikempatdetail/:id', verifyToken, updateDataRLTigaTitikEmpat)

// RL 3.5
router.post('/apisirs/rltigatitiklima', verifyToken, insertDataRLTigaTitikLima)
router.get('/apisirs/rltigatitiklima', verifyToken, getDataRLTigaTitikLima)
router.get('/apisirs/rltigatitiklimadetail/:id',verifyToken, getRLTigaTitikLimaById)
router.delete('/apisirs/rltigatitiklima/:id', verifyToken, deleteDataRLTigaTitikLima)
router.patch('/apisirs/rltigatitiklimadetail/:id',verifyToken, updateDataRLTigaTitikLima)

// RL 5.1
router.post('/apisirs/rllimatitiksatu', verifyToken, insertDataRLLimaTitikSatu)
router.get('/apisirs/rllimatitiksatu', verifyToken, getDataRLLimaTitikSatu)
router.get('/apisirs/rllimatitiksatudetail/:id',verifyToken, getRLLimaTitikSatuById)
router.delete('/apisirs/rllimatitiksatu/:id', verifyToken, deleteDataRLLimaTitikSatu)
router.patch('/apisirs/rllimatitiksatudetail/:id', verifyToken, updateDataRLLimaTitikSatu)

// RL 5.2
router.post('/apisirs/rllimatitikdua', verifyToken, insertDataRLLimaTitikDua)
router.get('/apisirs/rllimatitikdua', verifyToken, getDataRLLimaTitikDua)
router.get('/apisirs/rllimatitikduadetail/:id',verifyToken, getRLLimaTitikDuaById)
router.delete('/apisirs/rllimatitikdua/:id', verifyToken, deleteDataRLLimaTitikDua)
router.patch('/apisirs/rllimatitikduadetail/:id', verifyToken, updateDataRLLimaTitikDua)

// DINKES PROVINSI
router.post('/apisirs/loginadmin', loginadmin)
router.delete('/apisirs/logoutadmin', logoutadmin)
router.get('/apisirs/token', refreshToken)

// Get Data Dinkes
// router.get('/apisirs/apisirsadmin/:id', verifyToken, getDataRumahSakit)

// GET DATA KAB KOTA
router.get('/apisirs/kabkota', verifyToken, getDataKabKota)

// GET DATA KABKOTA DINKES KAB
// router.get('/apisirsadmin/kabkotaid', verifyToken, getDataKabKotabyID)

// GET DATA RS BY KAB KOTA
router.get('/apisirs/rumahsakit', verifyToken, getDataRumahSakitFilterbyKabKotaId)

// // DINKES KAB/KOTA

// // GET DATA

router.get('/apisirs/rltigatitikempatadmin', verifyToken, getDataRLTigaTitikEmpatKodeRSTahun)
router.get('/apisirs/rltigatitiklimaadmin', verifyToken, getDataRLTigaTitikLimaKodeRSTahun)
router.get('/apisirs/rllimatitiksatuadmin', verifyToken, getDataRLLimaTitikSatuKodeRSTahun)
router.get('/apisirs/rllimatitikduaadmin', verifyToken, getDataRLLimaTitikDuaKodeRSTahun)

// Validasi Data
router.get('/apisirs/validasi', verifyToken, getDataValidasiByRsId)
router.post('/apisirs/validasi', verifyToken, insertValidasi)
router.patch('/apisirs/validasi/:id', verifyToken, updateValidasi)
router.get('/apisirs/statusvalidasi', getStatusValidasi)

export default router