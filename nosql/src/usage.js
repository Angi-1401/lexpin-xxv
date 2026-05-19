import dotenv, { populate } from "dotenv";
import { connectDB, disconnectDB } from "./db.js";
import { Booking } from "./models/Booking.js";
import { Customer } from "./models/Customer.js";
import { connect } from "mongoose";

dotenv.config();

const booking = {
  customerName: "John Doe",
  customerEmail: "johndoe@example.com",
  roomType: "double",
  checkInDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
  checkOutDate: new Date(Date.now() + 48 * 60 * 60 * 1000), // Day after tomorrow
  totalPrice: 200,
  status: "pending",
  notes: "Late check-in requested.",
};

const run = async () => {
  try {
    await connectDB();

    // Create a new booking
    const newBooking = new Booking(booking);
    await newBooking.save();
    console.log("Booking created:", newBooking);

    // Retrieve all bookings
    const bookings = await Booking.find();
    console.log("All bookings:", bookings);

    // Retrieve a booking by ID
    const bookingById = await Booking.findById(newBooking._id);
    console.log("Booking by ID:", bookingById);

    // Retrieve a booking by specific criteria
    const bookingByEmail = await Booking.findOne({
      customerEmail: "johndoe@example.com",
    });
    console.log("Booking by email:", bookingByEmail);

    // Update a booking
    await Booking.findByIdAndUpdate(newBooking._id, {
      status: "confirmed",
      notes: "Customer called to confirm the booking.",
    });

    // Delete a booking
    await Booking.findByIdAndDelete(newBooking._id);
    console.log("Booking deleted.");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    disconnectDB();
  }
};

const ROOM_TYPES = ["single", "double", "suite"];

const populateCustomersWithDummyData = async () => {
  const dummyCustomers = [
    {
      firstName: "John",
      lastName: "Doe",
      customerEmail: "johndoe@example.com",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      customerEmail: "janesmith@example.com",
    },
    {
      firstName: "Alice",
      lastName: "Johnson",
      customerEmail: "alicejohnson@example.com",
    },
  ];

  try {
    await connectDB();
    await Customer.insertMany(dummyCustomers);
    console.log("Dummy customers added.");
  } catch (error) {
    console.error("Error populating dummy customers:", error);
  } finally {
    disconnectDB();
  }
};

// populateCustomersWithDummyData();

const selectRandomCustomer = async () => {
  try {
    const allCustomers = await Customer.find();
    if (allCustomers.length === 0) {
      console.log("No customers found.");
      return null;
    }

    const randomIndex = Math.floor(Math.random() * allCustomers.length);
    const randomCustomer = allCustomers[randomIndex];
    return randomCustomer;
  } catch (error) {
    console.error("Error selecting random customer:", error);
    return null;
  }
};

const findCustomerByEmail = async (email) => {
  try {
    const customer = await Customer.findOne({ customerEmail: email });
    if (!customer) {
      console.log(`Customer with email ${email} not found.`);
      return null;
    }

    return customer;
  } catch (error) {
    console.error("Error finding customer by email:", error);
  }
};

const createNewBookingForCustomer = async (
  customerEmail,
  roomType,
  checkInDate,
  checkOutDate,
  totalPrice,
  notes,
) => {
  try {
    const customer = await findCustomerByEmail(customerEmail);
    if (!customer) {
      return;
    }

    const newBooking = new Booking({
      customerName: `${customer.firstName} ${customer.lastName}`,
      customerEmail: customer.customerEmail,
      roomType: roomType,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      totalPrice: totalPrice,
      status: "pending",
      notes: notes,
    });
    await newBooking.save();

    console.log(
      `Booking created for ${customer.firstName} ${customer.lastName} for a ${roomType} room between ${checkInDate} - ${checkOutDate} ($ ${totalPrice}).`,
    );
  } catch (error) {
    console.error("Error creating booking for customer:", error);
  }
};

const main = async () => {
  try {
    connectDB();
    console.log("Booking System");

    const randomCustomer = await selectRandomCustomer();
    if (randomCustomer) {
      console.log(
        `Randomly selected customer: ${randomCustomer.firstName} ${randomCustomer.lastName} (${randomCustomer.customerEmail})`,
      );
    }

    const randomRoomType =
      ROOM_TYPES[Math.floor(Math.random() * ROOM_TYPES.length)];
    const checkInDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // Tomorrow
    const checkOutDate = new Date(Date.now() + 8 * 24 * 60 * 60 * 1000); // One week from now
    const randomTotalPrice = Math.floor(Math.random() * 500) + 100; // Random price between $100 and $600

    console.log("Creating a new booking for the randomly selected customer...");
    await createNewBookingForCustomer(
      randomCustomer.customerEmail,
      randomRoomType,
      checkInDate,
      checkOutDate,
      randomTotalPrice,
      "This booking is bullshit xd",
    );
  } catch (error) {
    console.error("Error in main function:", error);
  } finally {
    disconnectDB();
  }
};

// main();

const findAllBookingsOnPage = async (page = 1) => {
  try {
    connectDB();
    const bookings = await Booking.paginate(
      {},
      {
        page,
        limit: 10,
        sort: { checkInDate: -1 },
      },
    );
    console.log("All bookings:", bookings);
  } catch (error) {
    console.error("Error finding all bookings:", error);
  } finally {
    disconnectDB();
  }
};

findAllBookingsOnPage(2);

/**
 * Proyecto MongoDB.
 * 
 * Crear un esquema de base de datos paginada utilizando MongoDB el
 * cual permita almacenar información sobre pacientes, registros
 * y citas médicas.
 * La base de datos deberá contener las siguientes colecciones:
 * 
 * 1. Pacientes: Esta colección almacenará información sobre los pacientes,
 * incluyendo su nombre, fecha de nacimiento, edad (autocalculada con base
 * en la fecha de nacimiento), género, dirección y número de teléfono.
 * 
 * 2. Registros Médicos: Esta colección almacenará información sobre los
 * registros médicos de los pacientes, incluyendo el ID del paciente, fecha
 * del registro, diagnóstico, tratamiento y notas adicionales.
 * 
 * 3. Citas Médicas: Esta colección almacenará información sobre las citas
 * médicas de los pacientes, incluyendo el ID del paciente, fecha y hora de
 * la cita, motivo de la consulta y notas adicionales.
 * 
 * Se deberán incluir al menos 5 documentos de pacientes, 10 documentos de
 * registros médicos y 10 documentos de citas médicas.
 * 
 * El proyecto deberá incluir también scripts para las siguientes operaciones:
 * 1. Obtener todos los pacientes.
 * 2. Obtener el historial médico de un paciente específico (citas y
 * registros médicos).
 * 3. Obtener las citas médicas programadas para una fecha específica.
 * 4. Actualizar la información de un paciente.
 * 5. Eliminar un registro médico específico (INVESTIGAR SOFT-DELETE).
 * 
 * Opcional: Crear interfaz de usuario utilizando las herramientas de su
 * elección (React, Angular, Vue, etc.) para interactuar con la base de datos
 * y realizar las operaciones mencionadas anteriormente.
 */
