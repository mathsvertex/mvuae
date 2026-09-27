import { doc, setDoc } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "./config";

export interface DemoBookingPayload {
  name: string;
  whatsapp: string;
  grade: string;
  board: string;
  slotLabel?: string;
  slotTime?: string;
}

/**
 * Saves a demo booking into Firestore `demoBookings` collection
 */
export async function saveDemoBooking(payload: DemoBookingPayload): Promise<string> {
  // Sanitize alphanumeric ID conforming to isValidId
  const timestamp = Date.now();
  const randomSuffix = Math.random().toString(36).substring(2, 9);
  const bookingId = `demo_${timestamp}_${randomSuffix}`;
  const path = `demoBookings/${bookingId}`;

  const cleanData = {
    id: bookingId,
    name: payload.name.trim().slice(0, 100),
    whatsapp: payload.whatsapp.trim().slice(0, 25),
    grade: payload.grade.trim().slice(0, 30),
    board: payload.board.trim().slice(0, 50),
    slotLabel: (payload.slotLabel || "").slice(0, 100),
    slotTime: (payload.slotTime || "").slice(0, 100),
    status: "confirmed",
    createdAt: new Date().toISOString()
  };

  try {
    const docRef = doc(db, "demoBookings", bookingId);
    await setDoc(docRef, cleanData);
    return bookingId;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

/**
 * Records a diagnostic question attempt into Firestore `diagnosticAttempts` collection
 */
export async function recordDiagnosticAttempt(attempt: {
  gradeGroup: string;
  question: string;
  selectedIndex: number;
  isCorrect: boolean;
}): Promise<void> {
  const timestamp = Date.now();
  const randomSuffix = Math.random().toString(36).substring(2, 9);
  const attemptId = `diag_${timestamp}_${randomSuffix}`;
  const path = `diagnosticAttempts/${attemptId}`;

  const cleanData = {
    id: attemptId,
    gradeGroup: attempt.gradeGroup.slice(0, 20),
    question: attempt.question.slice(0, 300),
    selectedIndex: attempt.selectedIndex,
    isCorrect: attempt.isCorrect,
    timestamp: new Date().toISOString()
  };

  try {
    const docRef = doc(db, "diagnosticAttempts", attemptId);
    await setDoc(docRef, cleanData);
  } catch (error) {
    // Non-fatal analytics record
    console.warn("Could not record diagnostic attempt to Firestore:", error);
  }
}
