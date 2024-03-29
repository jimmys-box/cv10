import { useLocalStorage } from '../../functions/connexion';
import LogistiqueGms from '../../composants/planning/gms/planningGlobalGms'

export default function PlanningGlobalGms() {
    const role: any = useLocalStorage('userRole');
    
    return (
        <div className="customContent">
            {role[0] === 'administrator' ? (
                <LogistiqueGms />
            ) : (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>Vous n&apos;avez pas les droits pour accéder à cette page</h2>
                </div>
            )}
        </div>
    )
}
