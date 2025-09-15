import { ROOT_DECIMAL } from "@/context/config";
import BigNumber from "bignumber.js";

export function formatBalance(balance: BigNumber | undefined): string {
    if (!balance) return "";
    const options = { minimumFractionDigits: ROOT_DECIMAL };
    const unit = balance.dividedBy(BigNumber(10).pow(ROOT_DECIMAL));
    return unit.toNumber()
        .toLocaleString("en-US", options)
        .replace(/^(\d+)(?:\.0+|(\.\d*?)0+)$/, "$1$2");

}

export function truncateAddress(
    address: string,
    startChars: number = 6,
    endChars: number = 4
): string {
    if (!address || address.length <= startChars + endChars) {
        return address;
    }

    // Ensure address starts with 0x
    const normalizedAddress = address.startsWith('0x') ? address : `0x${address}`;

    // If the address is too short to truncate meaningfully, return as-is
    if (normalizedAddress.length <= startChars + endChars) {
        return normalizedAddress;
    }

    const start = normalizedAddress.slice(0, startChars);
    const end = normalizedAddress.slice(-endChars);

    return `${start}...${end}`;
}
