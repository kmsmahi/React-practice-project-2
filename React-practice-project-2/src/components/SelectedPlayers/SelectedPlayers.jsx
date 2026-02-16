import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ purchasedPlayers }) => {
    return (
        
        <div className="max-w-[1200px] mx-auto flex flex-col gap-4 mt-8">
            <h2 className="text-xl font-bold">Selected Players ({purchasedPlayers.length}/6)</h2>
            
            {purchasedPlayers.map((player) => (
                <SelectedCard 
                    key={player['player-name']}
                    player={player}
                />
            ))}
            {purchasedPlayers.length === 0 && (
                <p className="text-gray-500 italic">No players selected yet.</p>
            )}
        </div>
    );
};

export default SelectedPlayers;