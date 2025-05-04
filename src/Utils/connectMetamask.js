import { ethers } from "ethers";
import { toast } from "react-toastify";

const getProvider = () => {
  if (!window.ethereum) {
    toast.error("MetaMask is required. Install it to proceed.");
    return null;
  }
  return new ethers.providers.Web3Provider(window.ethereum);
};

/**
 * Connect to MetaMask and return provider + signer
 */
export const connectMetamask = async () => {
  const provider = getProvider();
  if (!provider) return null;

  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const signer = provider.getSigner();
    return { signer, provider };
  } catch (error) {
    console.error("Wallet connection failed:", error);
    toast.error("Failed to connect wallet");
    return null;
  }
};

/**
 * Check if wallet is already connected
 */
export const checkIfWalletIsConnect = async (setAccount) => {
  const provider = getProvider();
  if (!provider) return;

  try {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts.length) {
      setAccount(accounts[0]);
    } else {
      console.log("No accounts found");
    }
  } catch (error) {
    console.error("Wallet check failed:", error);
  }
};
