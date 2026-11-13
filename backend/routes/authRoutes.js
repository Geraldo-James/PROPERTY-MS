import { Router } from "express"
import { Registration } from "../controllers/Register_route.js"
import { LogIn } from "../controllers/login_val.js"
import { Properties } from "../controllers/properties_val.js"
import { Property_units } from "../controllers/Units_val.js"
import { Tenancy } from "../controllers/tenancy_val.js"
import { Tenant_payment } from "../controllers/payment_val.js"
import { verifyToken } from "../utils/token.js"
import { getProperties } from "../controllers/properties_val.js"
import { getUnits } from "../controllers/Units_val.js"
import { getPropId } from "../controllers/properties_val.js"
import { updateProperty } from "../controllers/properties_val.js"
import { deleteProperty } from "../controllers/properties_val.js"
import { Unit_Id } from "../controllers/Units_val.js"
import { del_all_properties } from "../controllers/properties_val.js"
import { deletePropertyUnits } from "../controllers/Units_val.js"
import { updateUnits } from "../controllers/Units_val.js"
import { delUnit } from "../controllers/Units_val.js"
import { View_tenant_records } from "../controllers/tenancy_val.js"
import { tenantRecord } from "../controllers/tenancy_val.js"
import { update_ten_rec } from "../controllers/tenancy_val.js"
import { All_pay_receipt } from "../controllers/payment_val.js"
import { All_tenant_unit } from "../controllers/tenancy_val.js"
import { Tenant_unit } from "../controllers/tenancy_val.js"
import { Get_unit_payments } from "../controllers/payment_val.js"
import { Delete_tenancy } from "../controllers/tenancy_val.js"
import { Del_tenancy_prop } from "../controllers/tenancy_val.js"
import { Del_tenancy_unit } from "../controllers/tenancy_val.js"
import { Tenant_per_unit } from "../controllers/tenancy_val.js"
import { property_Id_Validation } from "../middleware/propertyMiddleware.js"
import { verifyPropertyOwnership } from "../middleware/propertyMiddleware.js"
import { Payment_all_prop } from "../controllers/payment_val.js"
import { Unit_Id_Validation } from "../middleware/unitMiddleware.js"
import { Unit_Ownership_val } from "../middleware/unitMiddleware.js"
import { tenancy_id_validation } from "../middleware/tenancyMiddleware.js"
import { tenancy_ownership_val } from "../middleware/tenancyMiddleware.js"
import { property_tenancy_ownership } from "../middleware/tenancyMiddleware.js"
import { unit_tenancy_ownership } from "../middleware/tenancyMiddleware.js"

const router = Router()


// ======================================
// POST ROUTES 
// ======================================
router.post("/api/register", Registration)

router.post("/api/login", LogIn)

router.post("/api/properties", verifyToken, Properties)

router.post("/api/units", verifyToken, Property_units)

router.post("/api/tenancies", verifyToken, Tenancy)

router.post("/api/payments", verifyToken, Tenant_payment)



// ======================================
// GET ROUTES
// ======================================
router.get("/api/my-properties", verifyToken,getProperties)

router.get("/api/my-property/:id" , verifyToken, property_Id_Validation, verifyPropertyOwnership,getPropId)

router.get("/api/my-property/:id/units", verifyToken, property_Id_Validation, verifyPropertyOwnership,getUnits)

router.get("/api/my-property/:id/units/tenancies", verifyToken, property_Id_Validation,verifyPropertyOwnership, All_tenant_unit)  // position_adjusted for tenancy route

router.get("/api/my-property/:id/units/:unitsId", verifyToken, property_Id_Validation, verifyPropertyOwnership, Unit_Id_Validation, Unit_Ownership_val, Unit_Id)

router.get("/api/tenancies", verifyToken, View_tenant_records)

router.get("/api/tenancies/:tenancyId", verifyToken, tenancy_id_validation, tenancy_ownership_val, tenantRecord)





router.get("/api/my-property/:id/units/tenancies/:tenancyId", verifyToken, property_Id_Validation, verifyPropertyOwnership, tenancy_id_validation, property_tenancy_ownership, Tenant_unit)

router.get("/api/my-property/:id/units/:unitsId/tenancies/:tenancyId", verifyToken, property_Id_Validation, verifyPropertyOwnership, Unit_Id_Validation, Unit_Ownership_val, tenancy_id_validation, unit_tenancy_ownership, Tenant_per_unit)

router.get("/api/my-property/:id/payments/:paymentId", verifyToken, property_Id_Validation, verifyPropertyOwnership, Payment_all_prop )

router.get("/api/my-property/:id/units/tenancies/payments",verifyToken, property_Id_Validation, verifyPropertyOwnership, All_pay_receipt)

router.get("/api/my-property/:id/units/:unitsId/tenancies/:tenancyId/payments", verifyToken, property_Id_Validation, verifyPropertyOwnership, Unit_Id_Validation, Unit_Ownership_val, tenancy_id_validation, unit_tenancy_ownership, Get_unit_payments)



// ======================================
// PUT ROUTE 
// ======================================
router.put("/api/my-property/:id", verifyToken, property_Id_Validation, verifyPropertyOwnership, updateProperty)

router.put("/api/my-property/:id/units/:unitsId", verifyToken, property_Id_Validation, verifyPropertyOwnership, Unit_Id_Validation, Unit_Ownership_val, updateUnits)

router.put("/api/tenancies/:tenancyId", verifyToken, tenancy_id_validation, tenancy_ownership_val, update_ten_rec)



// ======================================
// DELETE ROUTE 
// ======================================
router.delete("/api/my-properties", verifyToken, del_all_properties)

router.delete("/api/my-property/:id", verifyToken, property_Id_Validation, verifyPropertyOwnership, deleteProperty)

router.delete("/api/my-property/:id/units", verifyToken, property_Id_Validation, verifyPropertyOwnership, deletePropertyUnits)

router.delete("/api/my-property/:id/units/:unitsId", verifyToken, property_Id_Validation, verifyPropertyOwnership, Unit_Id_Validation, Unit_Ownership_val, delUnit)


router.delete("/api/tenancies/:tenancyId", verifyToken, tenancy_id_validation, tenancy_ownership_val, Delete_tenancy)

router.delete("/api/my-property/:id/units/tenancies/:tenancyId", verifyToken, property_Id_Validation, verifyPropertyOwnership, tenancy_id_validation, property_tenancy_ownership , Del_tenancy_prop )

router.delete("/api/my-property/:id/units/:unitsId/tenancies/:tenancyId", verifyToken, property_Id_Validation, verifyPropertyOwnership, Unit_Id_Validation, Unit_Ownership_val,tenancy_id_validation, unit_tenancy_ownership, Del_tenancy_unit )



export default router

