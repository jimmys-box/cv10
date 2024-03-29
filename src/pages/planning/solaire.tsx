import { useLocalStorage } from '../../functions/connexion';
import LogistiqueSolaire from '../../composants/planning/solaire/planningGlobalSolaire'

export default function PlanningGlobalSolaire() {
    const role: any = useLocalStorage('userRole');

    return (
        <div className="customContent">
            {role[0] === 'administrator' ? (
                <LogistiqueSolaire />
            ) : (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>Vous n&apos;avez pas les droits pour accéder à cette page</h2>
                </div>
            )}
        </div>
    )
}
